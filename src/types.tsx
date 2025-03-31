
export interface User {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
  }
  
  export interface Properties {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  }
  