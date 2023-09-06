import React from "react";
import './Preview.css'
import NavigationBar from "../../component/Navigation bar/NavigationBar";
import PageFooter from "../../component/PageFooter/PageFooter"
import { AiOutlineLogin, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import {  TbEditCircle } from "react-icons/tb";
import {  TiArrowLeftThick  } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

function Preview() {
    return (
        <>
            
                <NavigationBar />
                <div className="d-flex justify-content-between">
                <div className="navigate container">
        <div className="d-flex justify-content-between arrow-text"><a href="/"  className="back ms-2" style={{ fontWeight: "bolder" }}><TiArrowLeftThick style={{ color: "black" }}></TiArrowLeftThick>Back</a>
          </div>
        <div className="search-container mb-5">

          <input
            placeholder="exam code or name"
            type="search"
            className="
      "
          />
          <AiOutlineSearch className="search-icon"></AiOutlineSearch>
        </div>
      </div>


                </div>

                <div className="preview-header container-fluid">
                    <div className="container">
                    <h1><strong>ACA-Cloud1:</strong>ACA Cloud Computing Certification Exam</h1>
                    <p style={{fontWeight:"bolder"}}>Alibaba</p>
                    <small style={{fontWeight:"bolder"}}>Pages 1, Published online:September 1, 2023    </small>
                    </div>
                </div>

                <div className="container preview-text mt-5">
                    <h5 >Abstract</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>

                </div>
                <div className="container preview-keyword">
                    <div className="d-flex">
                        <AiOutlineSearch className="me-2" style={{fontWeight:"bolder", fontSize:"18px"}}></AiOutlineSearch>
                        <p style={{fontWeight:"bolder"}}>Keywords: </p>
                    </div>
                    <div className="keyword ms-2">
                        <a href="/">Keyword</a>
                        <a href="/">Keyword</a>
                        <a href="/">Keyword</a>
                        <a href="/">Keyword</a>
                    </div>
                </div>

                <div className="preview-auth-buy container">
                    <div className="preview-auth">
                      <a className="d-flex py-3">
                        <AiOutlineLogin style={{fontSize:"30px", marginRight:"1rem"}}></AiOutlineLogin>
                        <h5>Login</h5>
                      </a>
                      <hr className="preview-line"/>
                      <a className="d-flex py-3">
                      <TbEditCircle style={{fontSize:"30px", marginRight:"1rem"}}></TbEditCircle>
                        <h5>Create an account</h5>
                      </a>
                    </div>
                    <div className="preview-purchase">
                        <h5 className="ps-2" >Buy exam</h5>
                        <div className="preview-purchase-text mx-2 my-2 px-2">
                            <h6>PDF download + Online access</h6>
                            <p><BsDot style={{fontSize:"25px"}}/>Lifetime access to exam PDF & online version</p>
                            <p><BsDot style={{fontSize:"25px"}}/>Exam PDF can be downloaded</p>
                            <p><BsDot style={{fontSize:"25px"}}/>Exam PDF can be printed</p>
                            <div>
                            <h6>USD 0.00</h6>
                            <a href="/" className="d-flex justify-content-between px-2" style={{border:"1px solid var(--tertiary-color)"}}> 
                            <AiOutlineShoppingCart style={{color:"var(--tertiary-color", fontSize:"30px"}}></AiOutlineShoppingCart>
                                <small  style={{color:"var(--tertiary-color", fontSize:"16px"}}>Buy Exam</small>
                            </a>
                            </div>
                        </div>

                    </div>
                </div>
                <PageFooter />
            


        </>
    );
}

export default Preview;