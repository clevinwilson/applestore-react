import React,{useEffect} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem('admin'));
        if(admin === false){
            navigate("/");
        }
    })

    const signout=()=>{
        localStorage.setItem('admin', JSON.stringify(false));
    }
    
    return (
       <Container>
            
            <nav style={{ border:" 1px solid #eaeaea",marginBottom:"30px"}} class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" onClick={() => { navigate('/admin/dashboard') }}>Admin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" onClick={()=>{navigate('/admin/dashboard')}}>Dashboard</a>
                        </li>
                        <li class="Products nav-item dropdown">
                            <a class="  nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="Products-dropdown dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" onClick={() => { navigate('/admin/add-product') }}>Add Product</a>
                                <a class="dropdown-item" href="#">Manage Product</a>
                            </div>
                        </li>

                        <li class="Orders nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Orders
                            </a>
                            <div class="Orders-dropdown dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" onClick={()=>{navigate('/admin/add-product')}}>Orders</a>
                                <a class="dropdown-item" href="#">Manage Orders</a>
                            </div>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li> */}
                    </ul>
                    <span class="navbar-text">
                        <li class="Admin nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin
                            </a>
                            <div class="Admin-dropdown dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a onClick={signout} class="dropdown-item" href="#">Sign out</a>
                            </div>
                        </li>
                    </span>
                </div>
            </nav>
        </Container>
    )
}
const Container=styled.div`
.Products{
    &:hover{
        .Products-dropdown{
            display:block !important;
        }
    }
}

.Orders{
    &:hover{
        .Orders-dropdown{
            display:block !important;
        }
    }
}

.Admin{
    &:hover{
        .Admin-dropdown{
            display:block !important;
        }
    }
}


`

export default Header