import styled from "styled-components"
import {Stack} from "@mui/material"

export const PreLoaderContainer = styled(Stack)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99999;
    display: block;
`

export const PreloaderStatus = styled(Stack)`
    width: 110px;
    height: 110px;
    position: absolute;
    left: 50%;
    top: 50%; 
    background-position: center;
    margin: -55px 0 0 -55px; 
    text-align: center;
`
export const LaBallTrainglePath = {
    position: "relative",
    webkitBoxSizing: "border-box",
    mozBoxSizing: "border-box",
    boxSizing: "border-box",
    display: "block",
    fontSize: "0",
    color: "#fff",
    width: "32px",
    height: "32px",
}

export const PreloaderBlock = styled(Stack)`
    position: absolute;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 100%;

    &:div:nth-child(1){
    -webkit-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
    -moz-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
    -o-animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
    animation: ball-triangle-path-ball-one 2s 0s ease-in-out infinite;
    }
    &:div:nth-child(2){
    -webkit-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
    -moz-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
    -o-animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
    animation: ball-triangle-path-ball-two 2s 0s ease-in-out infinite;
    }
    &:div:nth-child(3){
    -webkit-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
    -moz-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
    -o-animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
    animation: ball-triangle-path-ball-tree 2s 0s ease-in-out infinite;
    }
`