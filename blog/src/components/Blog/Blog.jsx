import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-layout" > {
        }

        <div className="blog-column" > <div className="blog-post" > <h2>Post Title 1</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> <a href="/post/1" >Read More</a> </div> <div className="blog-post" > <h2>Post Title 2</h2> <p>Suspendisse potenti. In non nisi id odio venenatis...</p> <a href="/post/2" >Read More</a> </div> </div> {
        }

        <div className="blog-column" > <div className="blog-post" > <h2>Post Title 3</h2> <p>Curabitur aliquet quam id dui posuere blandit...</p> <a href="/post/3" >Read More</a> </div> <div className="blog-post" > <h2>Post Title 4</h2> <p>Nulla quis lorem ut libero malesuada feugiat...</p> <a href="/post/4" >Read More</a> </div> </div> {
        }

        <div className="blog-sidebar" > {
        }

        <div className="sidebar-section about-me" > <h3>About Me</h3> <p>Hi ! I'm a passionate blogger who loves writing about tech, lifestyle, and more.</p>
 </div> {

        }

        <div className="sidebar-section recent-posts" > <h3>Recent Posts</h3> <ul> <li><a href="/post/5" >Recent Post 1</a></li> <li><a href="/post/6" >Recent Post 2</a></li> <li><a href="/post/7" >Recent Post 3</a></li> </ul> </div> {
        }

        <div className="sidebar-section follow-me" > <h3>Follow Me</h3> <div className="social-icons" > <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >Twitter</a> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >Facebook</a> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >Instagram</a> </div> </div> {
        }

        <div className="sidebar-section categories" > <h3>Categories</h3> <ul> <li><a href="/category/tech" >Tech</a></li> <li><a href="/category/lifestyle" >Lifestyle</a></li> <li><a href="/category/travel" >Travel</a></li> <li><a href="/category/food" >Food</a></li> </ul> </div> </div> </div>);
}

;

export default Blog;