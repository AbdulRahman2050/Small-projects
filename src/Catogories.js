const Category = ({ category,filterCat})=>{


return (
    category.map((cat,index)=>{
        return (
            <button key={index} onClick={()=>filterCat(cat)}>{cat}</button>
            
        )
})
)

}

export default Category;