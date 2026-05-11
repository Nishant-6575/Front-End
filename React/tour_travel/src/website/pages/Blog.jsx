import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import NavTitle from '../common/NavTitle'
import useCrudApi from '../../Custom/crudApi'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
    const { getapi } = useCrudApi("http://localhost:3000/blog")

    // select and export clicked btn id name
    const redirect = useNavigate()

    return (
        <div>
            <Header />
            <NavTitle title="Blog" />
            <div>
                <div>
                    <section id="blog_h" className="p_3 px-3">
                        <div className="container-fluid">
                            <div className="blog_h1 row">
                                {
                                    getapi && getapi.map((data, key) => {
                                        return (
                                            <div className="col-md-6 mb-5" key={data.id}>
                                                <div className="blog_h1l">
                                                    <div className="grid clearfix">
                                                        <figure className="effect-jazz mb-0">
                                                            <a href="blog_detail.html"><img src={data.img} className="w-100" alt="abc" style={{ height: 400 }} /></a>
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
                                                    <h4 className="mt-3 fs-3"><a href="blog_detail.html">{data.title}</a></h4>
                                                    <p className="mt-3">{data.desc}</p>
                                                    <h6 className="mb-0 mt-4"><button className="button btn" onClick={() => redirect("/blogdata", { state: key })} >Read More</button></h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="pages  text-center mt-5">
                                <ul className="mb-0">
                                    <li><a href="blog_detail.html"><i className="fa fa-chevron-left" /></a></li>
                                    <li><a className="act" href="blog_detail.html">1</a></li>
                                    <li><a href="blog_detail.html">2</a></li>
                                    <li><a href="blog_detail.html">3</a></li>
                                    <li><a href="blog_detail.html">4</a></li>
                                    <li><a href="blog_detail.html">5</a></li>
                                    <li><a href="blog_detail.html">6</a></li>
                                    <li><a href="blog_detail.html"><i className="fa fa-chevron-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <Footer />
        </div>

    )
}
