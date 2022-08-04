import React, { useState } from 'react';
import Header from '../Header/Header';
import {storage,db} from '../../Firebase/Firebase'

function AddProduct() {
    const [color, setColor] = useState([]);
    const [phoneStorage, setPhoneStorage] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [display, setDisplay] = useState("");
    const [battery, setBatter] = useState("");
    const [processor, setProcessor] = useState("");
    const [camera, setCamera] = useState("");
    const [ram, setRam] = useState("");
    const [weight, setWeight] = useState("");
    const [allColorImage,setAllColorImage]=useState();
    const [processorImage,setProcessorImage]=useState();
    const [productImage,setProductImage]=useState();

    const handleSubmit =async (event)=>{
        event.preventDefault();
        let colorObj=await uploadColorImages();
        // console.log(colorObj);
         console.log(color);

    }
    const uploadColorImages=()=>{
        return new Promise((resolve)=>{
            let colorDetails = []
            color.map((obj)=>{
               color.filter((value)=>{
                if(obj.id== value.id){
                    storage.ref(`/color-images/${obj.image.name}`).put(obj.image).then(({ ref }) => {
                        ref.getDownloadURL().then((url) => {
                            value.imageurl = url;
                        })
                    })
                }
               })
            })
            
             resolve()
           
        })
    }

    return (
        <div style={{ marginTop: "60px" }}>

            <Header />
            {/* <!-- Page Wrapper --> */}

            <div id="wrapper">

                {/* <!-- Sidebar -->
                
              {{> admin - sidebar}} */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* <!-- Main Content --> */}

                    <div id="content">
                        {/* <!-- Begin Page Content --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <h1 className="h3 mb-4 text-gray-800">Add Product</h1>

                            <div className="row">

                                <div className="col-lg-11">

                                    {/* <!-- Circle Buttons --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Details</h6>
                                        </div>
                                        {/* <div className="message p-3">
                                          {{ #if deviceSucc }}
                                          <div className="alert alert-success" role="alert">
                                              {{ deviceSucc }}
                                          </div>
                                          {{/if}}
                                          {{ #if deviceError }}
                                          <div className="alert alert-danger" role="alert">
                                              {{ deviceError }}
                                          </div>
                                      </div>
                                      {{/if}} */}
                                        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                                            <div className="card-body">
                                                <span style={{ marginLeft: " 13px", color: "green" }} id="check_availability_movie"
                                                ></span>
                                                <span style={{ marginLeft: " 13px", color: "green" }} id="check_not_movie"></span>

                                                {/* {{!-- Product Name --}} */}
                                                <div className="row m-2">
                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="product">Product Name</label>
                                                        <input
                                                            onChange={(e) => {
                                                                setProductName(e.target.value)
                                                            }}
                                                            value={productName}
                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="productname"
                                                            name="productname" required />
                                                    </div>

                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="product">Product Price</label>
                                                        <input
                                                            onChange={(e) => {
                                                                setProductPrice(e.target.value)
                                                            }}
                                                            value={productPrice}
                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="productprice"
                                                            name="productprice" required />
                                                    </div>
                                                </div>

                                                <div className="row m-2">

                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="product">Display</label>
                                                        <input
                                                            onChange={(e) => {
                                                                setDisplay(e.target.value)
                                                            }}
                                                            value={display}
                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="display" name="display"
                                                            required />
                                                    </div>


                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="product">Battery life</label>
                                                        <input
                                                            onChange={(e) => {
                                                                setBatter(e.target.value)
                                                            }}
                                                            value={battery}
                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="battery" name="battery"
                                                            required />
                                                    </div>
                                                </div>

                                                {/* <div className="form-group mt-3 col-md-5">
                                                    <div className="form-group">
                                                        <label for="Category">Select Category</label>
                                                        <input style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="category" name="category"
                                                            required />
                                                    </div>
                                                </div> */}

                                                {/* {{!-- Color --}} */}
                                                <div style={{ borderStyle: "solid", borderColor: "#67c2d6" }} className="row m-1"
                                                    id="color">
                                                    <div className="form-group mt-1 col-md-12 ">
                                                        <label for="color">Color</label>

                                                        <a style={{ borderRadius: "20px" }} className="ml-4 text-white btn btn-success"
                                                            id="add" onClick={() => { setColor([...color, { id: Date.now() }]) }}>+</a>
                                                    </div>

                                                    <div className="form-group m-3 col-md-12">
                                                        <div className="row">
                                                            <label className="col-md-12" for="processor ">All Colors Image</label>
                                                            <input 
                                                                onChange={(e) => {
                                                                    setAllColorImage(e.target.files[0])
                                                                }}
                                                            style={{ borderColor: "#b4e3eb" }} type="file"
                                                                className="form-control col-md-5 mt-2" name="allcolorsimage"
                                                                 required />
                                                            <img style={{ objectFit: "contain" }} src={allColorImage ? URL.createObjectURL(allColorImage) : ""} className="col-md-1 mt-2 color-image"
                                                                height="40px" width="40px" id="all-color-image" />

                                                        </div>
                                                    </div>

                                                    {
                                                        color.map((value) => {
                                                            return (
                                                                <div className='row'>
                                                                    <div className="form-group mt-3 col-md-4">
                                                                        <label for="processor">Color</label>
                                                                        <input onChange={(e) => {
                                                                            color.filter((obj) => {
                                                                                if (value.id == obj.id) {
                                                                                    obj.color = e.target.value;
                                                                                    return true;
                                                                                }
                                                                            })
                                                                        }}
                                                                            value={value.color}
                                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                                            className="form-control col-md-12 mt-2" id="color" name="color"
                                                                            required />
                                                                    </div>
                                                                    <div className="form-group mt-3 col-md-5">
                                                                        <label for="Trailer Link" className="col-md-12">Color Image </label>
                                                                        <div className="row">
                                                                            <input 
                                                                                onChange={(e) => {
                                                                                    color.filter((obj) => {
                                                                                        if (value.id == obj.id) {
                                                                                            obj.image = e.target.files[0];
                                                                                            return true;
                                                                                        }
                                                                                    })
                                                                                }}
                                                                            style={{ borderColor: "#b4e3eb" }} type="file"
                                                                                className="form-control col-md-9 mt-2" name="colorimage"
                                                                                onchange="viewImage(event,1)" required />
                                                                            <img style={{objectFit:"contain"}} className="col-md-3 mt-2 color-image" src={value.image ? URL.createObjectURL(value.image) : ""} id="color-image1"
                                                                                height="40px" width="40px" />


                                                                        </div>
                                                                    </div>
                                                                    {/* <div onClick={() => {
                                                                        console.log(color);
                                                                    }}
                                                                        className="pt-5 col-md-1">
                                                                        <a style={{ borderRadius: "50%", height: "41px", display: "flex", width: "40px", justifyContent: "center", alignItems: "center" }}
                                                                            className="m-1 ml-5 btn btn-success text-white" id="remove">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </a>


                                                                    </div> */}
                                                                    <div className="pt-5 col-md-1">
                                                                        <a onClick={() => {
                                                                            setColor(
                                                                                color.filter((obj) => {
                                                                                    return obj.id !== value.id;
                                                                                })
                                                                            )
                                                                        }}

                                                                            style={{ borderRadius: "50%", height: "41px" }}
                                                                            className="m-1 ml-5 btn btn-danger" id="remove">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-archive-fill" viewBox="0 0 16 16">
                                                                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                                                                            </svg></a>
                                                                    </div>


                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>




                                                {/* {{!-- storage --}} */}

                                                {/* {{!-- < div style=" border-style: solid; border-color: #ffbeb3;"
                                            className="row m-1 mt-5" id="storage">
                                                      <div className="form-group mt-1 col-md-12">
                                                          <label for="storage">Storage</label>
                                                          <button style="border-radius: 20px;width: 37px;"
                                                              className="m-1 ml-4 btn btn-danger" id="remove"
                                                              onblur="removeStorageElement()">-</button>
                                                          <button style="border-radius: 20px;" className="m-1 btn btn-success"
                                                              id="add" onclick="addStorageElement()">+</button>
                                                      </div>

                                                      <div className="form-group mt-3 col-md-5">
                                                          <label for="color">Storage </label>
                                                          <input style="border-color:#b4e3eb;" type="text"
                                                              className="form-control  mt-2" id="storage" name="storage" required>
                                                      </div>
                                                      <div className="form-group mt-3 col-md-5">
                                                          <label for="color">Price </label>
                                                          <input style="border-color:#b4e3eb;" type="text"
                                                              className="form-control  mt-2" id="storageprice" name="storageprice"
                                                              required>
                                                      </div>


                                                  </div> --}} */}


                                                {/* {{!-- Processor --}} */}
                                                <div className="row ml-1">
                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="processor">Processor</label>
                                                        <input
                                                            onChange={(e) => {
                                                                setProcessor(e.target.value)
                                                            }}
                                                            value={processor}
                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                            className="form-control col-md-12 mt-2" id="processor" name="processor"
                                                            required />
                                                    </div>
                                                    <div className="form-group mt-3 col-md-5">
                                                        <label for="Trailer Link" className="col-md-12">Processor Image</label>
                                                        <div className="row">
                                                            <input
                                                                onChange={(e) => {
                                                                    setProcessorImage(e.target.files[0])
                                                                }}
                                                            style={{ borderColor: "#b4e3eb" }} type="file"
                                                                className="form-control col-md-9 mt-2" name="processorimage"
                                                                 required />
                                                            <img 
                                                                src={processorImage ? URL.createObjectURL(processorImage) : ""}
                                                             style={{ objectFit: "contain" }} className="col-md-3 mt-2" 
                                                                id="processor-img" height="40px" width="40px" />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group mt-3 col-md-10">
                                                    <label for="storage">Camera</label>
                                                    <input
                                                        onChange={(e) => {
                                                            setCamera(e.target.value)
                                                        }}
                                                        value={camera}
                                                        style={{ borderColor: "#b4e3eb" }} type="text"
                                                        className="form-control col-md-12 mt-2" id="camera"
                                                        name="camera" required />
                                                </div>



                                                <div className="form-group mt-3 col-md-10">
                                                    <label for="storage">RAM</label>
                                                    <input
                                                        onChange={(e) => {
                                                            setRam(e.target.value)
                                                        }}
                                                        value={ram}
                                                        style={{ borderColor: "#b4e3eb" }} type="text"
                                                        className="form-control col-md-12 mt-2" id="ram"
                                                        name="ram" required />
                                                </div>

                                                {/* add storage */}

                                                {/* {{!-- Color --}} */}
                                                <div style={{ borderStyle: "solid", borderColor: "#67c2d6" }} className="row m-1"
                                                    id="color">
                                                    <div className="form-group mt-1 col-md-12 ">
                                                        <label for="color ">Storage </label>

                                                        <a style={{ borderRadius: "50%", height: "41px", width: "40px", justifyContent: "center", alignItems: "center" }} className="ml-4 text-white m-1 btn btn-success"
                                                            id="add" onClick={() => { setPhoneStorage([...phoneStorage, { id: Date.now() }]) }}>+</a>
                                                    </div>
                                                    {
                                                        phoneStorage.map((value) => {
                                                            return (
                                                                <div className='row'>
                                                                    <div className="form-group mt-3 col-md-4">
                                                                        <label for="processor">Add Storage  </label>
                                                                        <input
                                                                            onChange={(e) => {
                                                                                phoneStorage.filter((obj) => {
                                                                                    if (value.id == obj.id) {
                                                                                        obj.storage = e.target.value;
                                                                                        return true;
                                                                                    }
                                                                                })
                                                                            }}
                                                                            value={value.storage}
                                                                            style={{ borderColor: "#b4e3eb" }} type="text"
                                                                            className="form-control col-md-12 mt-2" id="color" name="color"
                                                                            required />
                                                                    </div>
                                                                    <div className="form-group mt-3 col-md-4">
                                                                        <label for="Trailer Link" className="col-md-12">Storage Price</label>
                                                                        <div className="row">
                                                                            <input
                                                                                onChange={(e) => {
                                                                                    phoneStorage.filter((obj) => {
                                                                                        if (value.id == obj.id) {
                                                                                            obj.price = e.target.value;
                                                                                            return true;
                                                                                        }
                                                                                    })
                                                                                }}
                                                                                value={value.price}
                                                                                style={{ borderColor: "#b4e3eb" }} type="text"
                                                                                className="form-control col-md-12 mt-2" id="color" name="color"
                                                                                required />
                                                                        </div>
                                                                    </div>
                                                                    {/* <div onClick={() => {
                                                                        console.log(storage);
                                                                    }}
                                                                        className="pt-5 col-md-1">
                                                                        <a style={{ borderRadius: "50%", height: "41px", display: "flex", width: "40px", justifyContent: "center", alignItems: "center" }}
                                                                            className="m-1 ml-5 btn btn-success text-white" id="remove">
                                                                            <i className="fa-solid fa-check"></i>
                                                                        </a>


                                                                    </div> */}
                                                                    <div className="pt-5 col-md-1">
                                                                        <a onClick={() => {
                                                                            console.log(value.id)
                                                                            setPhoneStorage(
                                                                                phoneStorage.filter((obj) => {
                                                                                    return obj.id !== value.id;
                                                                                })
                                                                            )
                                                                        }}
                                                                            style={{ borderRadius: "50%", height: "41px" }}
                                                                            className="m-1 ml-5 btn btn-danger" id="remove">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white bi bi-archive-fill" viewBox="0 0 16 16">
                                                                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                                                                            </svg>
                                                                        </a>

                                                                    </div>


                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>


                                                <div className="form-group mt-3 col-md-10">
                                                    <label for="storage">Weight</label>
                                                    <input
                                                        onChange={(e) => {
                                                            setWeight(e.target.value)
                                                        }}
                                                        value={weight}
                                                        style={{ borderColor: "#b4e3eb" }} type="text"
                                                        className="form-control col-md-12 mt-2" id="weight"
                                                        name="weight" required />
                                                </div>

                                                <hr />
                                                <label className="ml-3" for=" Trailer Link col-md-12">Product Image</label>
                                                <div className="form-group mt-3 col-md-10">
                                                    <img src={productImage ? URL.createObjectURL(productImage) : ""} id="product-image" />
                                                    <input 
                                                        onChange={(e) => {
                                                            setProductImage(e.target.files[0])
                                                        }}
                                                    style={{ borderColor: "#b4e3eb" }} type="file"
                                                        className="form-control col-md-12 mt-2" name="productimage"
                                                        onchange="productImage(event)" required />
                                                </div>

                                                <center>
                                                    <a href="/admin/dashboard" className="btn btn-danger  mt-3 mr-2 ">Cancel</a>
                                                    <button type="submit" id="submit"
                                                        className="btn btn-success  mt-3">Submit</button>
                                                </center>
                                            </div>
                                        </form>
                                    </div>



                                </div>

                            </div>
                        </div>
                        {/* <!-- /.container-fluid --> */}


                    </div>
                    {/* <!-- End of Main Content --> */}


                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
        </div>
    )
}

export default AddProduct