import SidebarItem from "./sidebar-item";


export default function TodoListSidebar() {
    const name = ['ToDo List', 'ToDo List Projects'];

    return (
        <div>
            {name.map((item, index)=> (
                <SidebarItem name={item} key={index}></SidebarItem>
                ))} 
            
        </div>
        
    );
}
