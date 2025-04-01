
export interface User {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    date: string;
  }
  
  export interface Properties {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  }
  

 export interface UserModalProps {
    user: User | null;
    onClose: () => void;
  }