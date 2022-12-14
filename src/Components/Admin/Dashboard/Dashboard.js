import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

function Dashboard() {
    return (
        
        <div style={{ marginTop: "60px" }}>
            
                <Header/>
            {/* <!-- Page Wrapper --> */}
            
            <div id="wrapper">
              
                {/* <!-- Sidebar -->
                
              {{> admin - sidebar}} */}
             
                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" class="d-flex flex-column">
                    {/* <!-- Main Content --> */}
                    
                    <div id="content">
                        {/* <!-- Begin Page Content --> */}

                        <div class="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                            </div>

                            <div class="row">

                                {/* <!-- Earnings (Monthly) Card Example --> */}
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-primary shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Users</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">Admin
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i style={{color: "#4e73df"}} class="fa fa-user fa-2x "></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Earnings (Annual) Card Example --> */}
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-success shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Orders</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">3
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i style={{color: "#1cc88a"}} class="bi bi-bag-check-fill fa-2x "></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Tasks Card Example --> */}
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-info shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Products
                                                    </div>
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col-auto">
                                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                                8</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i style={{color: "#36b9cc"}} class="bi bi-display fa-2x "></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Pending Requests Card Example --> */}
                                <div class="col-xl-3 col-md-6 mb-4">
                                    <div class="card border-left-warning shadow h-100 py-2">
                                        <div class="card-body">
                                            <div class="row no-gutters align-items-center">
                                                <div class="col mr-2">
                                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Category</div>
                                                    <div class="h5 mb-0 font-weight-bold text-gray-800">9
                                                    </div>
                                                </div>
                                                <div class="col-auto">
                                                    <i style={{color: "#f6c23e"}} class="fas fa-th-large fa-2x "></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Illustrations -->
                                {{!-- < div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-center">
                                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                            src="/images/ghf-home.jpg" alt="">
                                    </div>
                                    <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank"
                                        rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated
                                        collection of beautiful svg images that you can use completely free and without
                                        attribution!</p>
                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                        unDraw &rarr;</a>
                                </div>
                            </div> --}} */}
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

export default Dashboard