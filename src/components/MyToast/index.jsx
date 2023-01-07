import { toast } from 'react-hot-toast';

export default function MyToast(type, message, color, time) {
    return toast[type](message, {
        position: 'top-right',
        style: {
            border: `1px solid ${color}`,
            color: '#333'
        },
        iconTheme: {
            primary: `${color}`,
            secondary: '#eee'
        },
        duration: time ? time : 2200
    });
}
