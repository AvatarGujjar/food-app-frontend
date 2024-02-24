import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';


export default function Home() {

    const [search, setSearch] = useState('');

    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/foodData", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            setFoodItem(responseData[0]);
            setFoodCat(responseData[1]);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);


    return (
        <>
            <Navbar />

            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

                    <div className="carousel-inner" id='carousel'>
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">

                                <input className="form-control me-2 w-70 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg> */}
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://www.howhigh.ca/wp-content/uploads/05-Get-Messy.png" className="d-block w-100" style={{ objectFit: "contain", filter: "brightness(40%)" }} alt="MyPic" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="MyPic" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://thumbs.dreamstime.com/b/pieces-pizza-different-various-types-banner-old-retro-boards-still-life-concept-closeup-129819511.jpg" className="d-block w-100" style={{ filter: "brightness(40%)" }} alt="MyPic" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div className='container'>
                {foodCat.length !== 0 && foodCat.map((data) => (
                    <div className='row mb-3' key={data._id}>
                       
                        <div className='fs-3 m-4'>
                            {data.CategoryName}
                        </div>
                        <hr className='categery-line'/>
                        <div className='categery-section'>
                        {foodItem.length !== 0 ?
                            foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                .map(filterItems => {
                                    return (
                                        <div key={filterItems._id} className='home-card-div'>
                                            {/* //col-12 col-md-6 col-lg-3 m-4           */}
                                            <Card foodItem={filterItems}
                                                options={filterItems.options[0]}
                                            ></Card>
                                        </div>
                                    )
                                })
                            : null}
                            </div>
                    </div>
                ))}

            </div>
            <Footer />
        </>
    );
};
