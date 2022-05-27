import React, {useEffect}from "react";
import PostsStore from "../../store/PostsStore";
import { observer } from 'mobx-react';
import '../../App'


function Weather() {
    
    useEffect( () => {
        setTimeout ( async() => {
          PostsStore.getPosts()
        }, 1000)
    },[])

    return (
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="tableHeader">Дата</th>
                        <th className="tableHeader">Температура</th>
                        <th className="tableHeader">Облачность</th>
                    </tr>
                </thead>
                <tbody>
                {
                    PostsStore.isLoad ? (
                        PostsStore.posts.map ( (e) => 
                            <tr key={e.id}>
                                <td>{e.date}</td>
                                <td>{e.temp}</td>
                                <td>{e.cloudy}</td>
                            </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan="3">loading..</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <button 
                onClick={() => {PostsStore.getupdate()}}
                className="mar30"
            >
                Обновить ( подтянуть с АПИ, записать в базу)
            </button>
        </div>
    );
}

export default observer(Weather);
