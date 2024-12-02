import { notification } from "antd";

const NotificationApp = () =>{
    const notify = ({type}) =>{
        switch (type) {
            case 'add':
            return notification.open({ type:'success', message:"Maxsulot qo'shildi"})
                
        
            default:
                break;
        }
    }
    return notify


}

export default NotificationApp
