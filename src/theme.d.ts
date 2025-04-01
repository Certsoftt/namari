import { PaletteColor } from "@mui/material"
import {PaletteColorOptions, ThemeOptions} from "@mui/material/styles"
import React from 'react'

declare module '@mui/material/styles'{
    interface Theme {
        user:{
            customer:{
                primary: string
            },
            vendor:{
                primary: string
            },
            admin:{
                primary: string
            },
            organization:{
                primary: string
            },
            driver:{
                primary: string
            }
        }
    }
    interface ThemeOptions{
        user:{
            customer:{
                primary: React.CSSProperties['color']
            },
            vendor:{
                primary: React.CSSProperties['color']
            },
            admin:{
                primary: React.CSSProperties['color']
            },
            organization:{
                primary: React.CSSProperties['color']
            },
            driver:{
                primary: React.CSSProperties['color']
            }
        }
    }
    interface Palette{
        sitePrimaryColor?:PaletteColor
    }
    interface PaletteOptions{
        sitePrimaryColor: PaletteColorOptions
    }
    interface SimplePaletteColorOptions{
        lighter?:string
    }
    interface PaletteColor{
        darker?:string
        lighter?:string
    }
}