
export interface User {
    username: string;
    password: string;
  }
  
  export interface Properties {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  }
  