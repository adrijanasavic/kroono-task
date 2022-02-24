import styled from "styled-components";

export const StyledLoader = styled("div")`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #333333;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    -webkit-animation: spin 0.3s linear infinite; /* Safari */
    animation: spin 0.3s linear infinite;
    }

    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`;
