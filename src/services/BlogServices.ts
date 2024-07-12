export {};
export interface BlogPost {
    id: number;
    title: string;
    content: string;
  }
  
  export interface IBlogService {
    addPost(post: BlogPost): void;
    removePost(id: number): void;
    getPosts(): BlogPost[];
  }
  class BlogService implements IBlogService {
    private posts: BlogPost[] = [];
    private nextId: number = 1;
  
    addPost(post: BlogPost): void {
      post.id = this.nextId++;
      this.posts.push(post);
    }
  
    removePost(id: number): void {
      this.posts = this.posts.filter(post => post.id !== id);
    }
  
    getPosts(): BlogPost[] {
      return this.posts;
    }
  }
  
  export default BlogService;