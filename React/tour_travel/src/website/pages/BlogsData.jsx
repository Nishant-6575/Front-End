import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import NavTitle from '../common/NavTitle'
import useCrudApi from '../../Custom/crudApi'
import { data, useLocation, useNavigate } from 'react-router-dom'

export default function BlogsData() {
    const { getapi } = useCrudApi("http://localhost:3000/blog")

    const [singledata, setsingledata] = useState(null)

    const location = useLocation()

    const id = location.state

    useEffect(() => {
        if (id == null) {
            setsingledata(getapi[0])
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        } else {
            setsingledata(getapi[id])
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }, [getapi, id])

    // details btn click and move to top
    const getkey = async (key) => {
        setsingledata(getapi[key])
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <Header />
            <NavTitle name="Blog Detail" title="Blog Detail" img="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045036_1280.jpg" />
            <section id="blog_h" className="p_3 px-3">
                <div className="container-fluid">
                    {
                        singledata && (
                            <h2 className="text-center mb-4">{singledata.title}</h2>
                        )
                    }
                    <div className="blog_dt1 row">
                        <div className="col-md-12">
                            <div className="blog_dt1i">
                                <div className="grid clearfix">
                                    <figure className="effect-jazz mb-0">
                                        {
                                            singledata && (
                                                <a href="blog_detail.html"><img src={singledata.img} className="w-100" alt="abc" style={{ height: 600 }} /></a>

                                            )
                                        }
                                    </figure>
                                </div>
                                {
                                    singledata && (
                                        <p className="mt-3">{singledata.desc}</p>
                                    )
                                }
                                <p>There are also practical considerations like cost and time spent traveling from place to place and maybe even how much luggage space there is in the car/plane/train compartment where we'll be sleeping tonight! But no matter what kind of traveler they are or what they're looking for out of their next trip abroad, everyone should consider many factors before booking their flight(s).</p>
                                <div className="testim_1i1 p-4  bg-light text-center">
                                    <p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
                                    <h6 className="fw-bold lh-base">Eget Amet <br /> <span className="col_green fw-normal">CEO of Education</span></h6>
                                </div>
                                <p className="mt-3">Our team of experienced travel experts is here to help you plan every aspect of your trip, from flights and accommodations to activities and tours. We understand that everyone's travel preferences are unique, which is why we take the time to get to know you and your travel style before creating a personalized itinerary. Once the project starts, it is important to check in with the handyman on a regular basis to ensure the job is being completed correctly. The homeowner should also ensure that the handyman is following safety protocols.</p>
                                <div className="blog_dt1i1 row">
                                    <div className="col-md-6">
                                        <div className="blog_dt1i1l">
                                            <div className="grid clearfix">
                                                <figure className="effect-jazz mb-0">
                                                    <a href="blog_detail.html"><img src="img/25.jpg" className="w-100" alt="abc" /></a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog_dt1i1l">
                                            <div className="grid clearfix">
                                                <figure className="effect-jazz mb-0">
                                                    <a href="blog_detail.html"><img src="img/26.jpg" className="w-100" alt="abc" /></a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="mt-3 mb-3">Business &amp; Holiday Travel</h2>
                                <p>Whether you're traveling solo, with a partner, or with a group, we are committed to providing you with a stress-free and unforgettable travel experience. So why wait? Contact us today to start planning your next adventure! Handyman services are an ideal solution for busy homeowners. Instead of spending time trying to fix things around the house, you can leave it to the professionals and have them take care of it for you.</p>
                                <hr />
                                <div className="blog_dt1i2 row">
                                    <div className="col-md-6">
                                        <div className="blog_dt1i2l">
                                            <ul className="mb-0">
                                                <li className="d-inline-block me-2 fw-bold">Tags:</li>
                                                <li className="d-inline-block"><a className="d-block" href="#"> Architecture</a></li> ,
                                                <li className="d-inline-block"><a className="d-block" href="#"> Commercial</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog_dt1i2r text-end">
                                            <h6 className="mb-0">
                                                <span className="fw-bold">Share This Post:</span>
                                                <a className="mx-2  font_14" href="#"><i className="fa fa-facebook" /></a>
                                                <a className="mx-2  font_14" href="#"><i className="fa fa-twitter" /></a>
                                                <a className="mx-2  font_14" href="#"><i className="fa fa-linkedin" /></a>
                                                <a className="mx-2  font_14" href="#"><i className="fa fa-instagram" /></a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_dt1ib mt-4">
                                <div className="blog_dt1ib1">
                                    <h2>Related Blog</h2>
                                    <div className="blog_h1 row mt-4">
                                        {
                                            getapi && getapi.slice(0, 2).map((data, key) => {
                                                return (
                                                    <div className="col-md-6" key={data.id}>
                                                        <div className="blog_h1l">
                                                            <div className="grid clearfix">
                                                                <figure className="effect-jazz mb-0">
                                                                    <a href="#"><img src={data.img} className="w-100" alt="abc" style={{ height: 400 }} /></a>
                                                                </figure>
                                                            </div>
                                                            <h5 className="font_14 mt-3 bg_dark text-white d-inline-block rounded-3 p-2 px-3">
                                                                {
                                                                    new Date(data.date).toLocaleDateString(
                                                                        "en-US",
                                                                        {
                                                                            month: "short",
                                                                            day: "numeric",
                                                                            year: "numeric"
                                                                        }
                                                                    )
                                                                }
                                                            </h5>
                                                            <h4 className="mt-3 fs-3"><a href="#">{data.title}</a></h4>
                                                            <p className="mt-3">{data.desc}</p>
                                                            <h6 className="mb-0 mt-4"><button className="button btn" href="#" onClick={() => getkey(key)}>Read More</button></h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="blog_dt1ib2 mt-4">
                                    <h2>Recent Comments</h2>
                                    <div className="blog_dt1ib2i row shadow_box  mx-0 p-4 px-3 mt-4">
                                        <div className="col-md-2 col-2">
                                            <div className="blog_dt1ib2il">
                                                <img src="img/32.jpg" className="w-100" alt="abc" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="blog_dt1ib2ir">
                                                <h5>Eget Porta <a className="d-inline-block bg-white rounded-3 pull-right fw-normal  font_14 col_green" href="#"><i className="fa fa-reply me-1" /> Reply</a></h5>
                                                <h6 className="font_14  mt-3 col_green">
                                                    FEBRUARY 24, 2019 <span className="text-muted mx-2"> |</span> <span className="text-muted"> 30 minutes ago</span></h6>
                                                <p className="mt-3">Denouncing pleasure and praising pain was born and I will give you a complete all account of the system, and expound the actual teachings.</p>
                                                <ul className="mb-0">
                                                    <li className="d-inline-block me-2 fw-bold">Follow On:</li>
                                                    <li className="d-inline-block"><a className=" d-block" href="#"> Facebook</a></li>  <span className="mx-2">/</span>
                                                    <li className="d-inline-block"><a className=" d-block" href="#"> Twitter</a></li> <span className="mx-2">/</span>
                                                    <li className="d-inline-block"><a className="d-block" href="#"> Instagram</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_dt1ib2i row shadow_box  mx-0 p-4 px-3 mt-4">
                                        <div className="col-md-2 col-2">
                                            <div className="blog_dt1ib2il">
                                                <img src="img/33.jpg" className="w-100" alt="abc" />
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="blog_dt1ib2ir">
                                                <h5>Lorem Amet <a className="d-inline-block bg-white rounded-3 pull-right fw-normal  font_14 col_green" href="#"><i className="fa fa-reply me-1" /> Reply</a></h5>
                                                <h6 className="font_14  mt-3 col_green">
                                                    FEBRUARY 27, 2019 <span className="text-muted mx-2"> |</span> <span className="text-muted"> 39 minutes ago</span></h6>
                                                <p className="mt-3">Denouncing pleasure and praising pain was born and I will give you a complete all account of the system, and expound the actual teachings.</p>
                                                <ul className="mb-0">
                                                    <li className="d-inline-block me-2 fw-bold">Follow On:</li>
                                                    <li className="d-inline-block"><a className="d-block" href="#"> Facebook</a></li>  <span className="mx-2">/</span>
                                                    <li className="d-inline-block"><a className="d-block" href="#"> Twitter</a></li> <span className="mx-2">/</span>
                                                    <li className="d-inline-block"><a className="d-block" href="#"> Instagram</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_dt1ib3 mt-4">
                                    <h2>Add a Comment</h2>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="blog_dt1ib3i row">
                                        <div className="col-md-6">
                                            <div className="blog_dt1ib3il">
                                                <input placeholder="Name" className="form-control border-0 bg-light" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blog_dt1ib3il">
                                                <input placeholder="Email" className="form-control border-0 bg-light" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_dt1ib3i row mt-4">
                                        <div className="col-md-6">
                                            <div className="blog_dt1ib3il">
                                                <input placeholder="Website" className="form-control border-0 bg-light" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blog_dt1ib3il">
                                                <input placeholder="Subject" className="form-control border-0 bg-light" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog_dt1ib3i row mt-4">
                                        <div className="col-md-12">
                                            <div className="blog_dt1ib3il">
                                                <textarea placeholder="Enter your comment here..." className="form-control form_text border-0 bg-light" defaultValue={""} />
                                                <h6 className="mb-0 mt-4"><a className="button" href="#">Post Comment <i className="fa fa-long-arrow-right ms-1" /></a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}