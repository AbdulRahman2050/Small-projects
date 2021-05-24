import { useState } from "react";
import menu from "./menudata";
import Category from "./Catogories";

const newCat= ["all",... new Set(menu.map((item)=>{
  return item.category;
}))]

const Menu = () => {
  const [menuData, setMenu] = useState(menu);
  const [category, setCategory] = useState(newCat);


  
  


  const filterCat = (category) => {
   if(category==="all"){
     setMenu(menu);
     return
   }
   
    const newItems = menu.filter((i) => {
      return i.category === category;
    });

    setMenu(newItems);
  };

  return (
    <main className="main1">
      <div className="menu">
        <h1>Menu Items</h1>
        <hr />
      </div>
      <div className="navBtn">
      <Category category={category} filterCat={filterCat} />
      </div>

      <div className="items">
        {menuData.map((menu) => {
          const { id, title, price, img, desc } = menu;
          return (
            <article key={id} className="menug">
              <img src={img} alt={title} />
              <div className="menuInfo">
                <header>
                  <h4>{title}</h4>
                  <span>${price}</span>
                </header>
                <hr />
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Menu;
