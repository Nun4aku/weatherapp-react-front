import { makeObservable, toJS} from "mobx";
import PostService from '../components/API/PostService';
import { observable, action, runInAction} from 'mobx';



class PostsStore {

    constructor() {
        makeObservable(this, {
            posts: observable,
            getPosts: action,
            isLoad: observable
        })
    }

    posts = [];
    isLoad = false
    

    async getPosts() {
        this.isLoad = false
        try {
                const res = await PostService.getAll()
                runInAction( () => {
                    console.log(res)
                    this.posts = res
                    console.log('this.posts',toJS(this.posts))
                    this.isLoad = true
                })
        }
        catch {
            runInAction( () => {
                this.isLoad = false
                console.log('Ошибка getPosts')
            })
        }
    }

    async getupdate() {
        this.isLoad = false
        try {
                const res = await PostService.update()
                runInAction( () => {
                    //console.log(res)
                    this.posts = res
                    //console.log('this.posts',toJS(this.posts))
                    this.isLoad = true
                })
        }
        catch {
            runInAction( () => {
                this.isLoad = false
                console.log('Ошибка getupdate')
            })
        }
    }
    
    
}


export default new PostsStore();