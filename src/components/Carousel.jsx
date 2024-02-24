import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://c4.wallpaperflare.com/wallpaper/667/630/482/burger-dinner-food-hamburger-wallpaper-preview.jpg" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(40%)" }} alt="MyPic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="MyPic" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.onmanorama.com/content/dam/mm/en/food/in-season/images/2020/3/4/gujiya.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="MyPic" />
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
    )
};
