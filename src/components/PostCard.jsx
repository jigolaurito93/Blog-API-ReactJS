import React from 'react';
import { Link } from 'react-router-dom';


export default function PostCard({ post }) {
    return (
        <div className="card mt-3">
            <div className="row g-0">
                <div className="col-12 col-md-6 col-lg-3 my-3">
                    <img className="card-img-top ms-5 mt-4 border border-dark" src="https://picsum.photos/100" alt="random" style={{ width: "200px", height: "170px" }}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted m-2">{ post.date_created }</h6>
                        <h5 className="card-title mt-3 fw-bold">{ post.title }</h5>
                        <h6 className="card-subtitle">By: { post.author.username }</h6>
                        <p className="card-text mt-3">{ post.content }</p>
                        <Link className='btn btn-primary m-1 btn-sm' to={`/posts/${post.id}`}>See More</Link>
                        <Link className='btn btn-success m-1 btn-sm' to={`/posts/${post.id}`}>Edit</Link>
                        <Link className='btn btn-danger m-1 btn-sm' to={`/posts/${post.id}`}>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
