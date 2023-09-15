import React from "react"
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter";
import { BsFacebook , BsInstagram} from "react-icons/bs"
import { AiOutlineUser, AiFillTwitterCircle } from "react-icons/ai";
import image from "../../static/image.png";
function Blog (){
    return (
        <>
     <NavigationBar />
      <section>
        <div>
            <div>
                <div className="blog-image">
                    <img src={image}></img>
                </div>
                <div>
                    <p className="blog-text-head">Category</p>
                    <h6>Lorem ipsum dolor sit amet, consecteteur adipiscing elit</h6>
                    <p>Aenan massa, Cum solicis natoquo mus....<span>Read More</span></p>
                    <div className="blog-social-icons"> 
                       <div className="blog-social-icon"> 
                         <BsInstagram/>
                       </div>
                       <div className="blog-social-icon"> 
                         <BsFacebook/>
                       </div>
                       <div className="blog-social-icon"> 
                          <AiFillTwitterCircle/>
                       </div>
                       <div className="blog-social-icon"> 

                       </div>
                    </div>
                    <div className="span-user"> 
                      <div>
                        <img className ="span-user-image">
                          <AiOutlineUser/>
                        </img>
                      </div>
                      <div>
                        <span>Author</span>
                        <span>Mon Sept 11 2023</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="side-post">
           <h6>LATEST POSTS</h6>
           <div>
            <p className="side-post-date"> Mon Sept 11 2023</p>
            <p className="side-post-span"> Lorem ipsum dolor sit amet</p>
           </div>
        </div>
      </section>


     <PageFooter />
        </>
    )


}
 

export default Blog