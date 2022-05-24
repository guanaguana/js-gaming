const list=[
    {
        id: 1,
        text: "asa",
        den: "sda",
        notifikace:true,
    },
    {
        id: 2,
        text: "asa",
        den: "sda",
        notifikace:false,
    },
    {
        id: 3,
        text: "asa",
        den: "sda",
        notifikace:true,
    }
]

const List=()=>{
    return(
      <div>
          {list.map((listek)=>{return <h3 key={listek.id}>{listek.text}</h3>})}
      </div>  
    )
}

export default List