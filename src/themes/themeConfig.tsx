import {ThemeConfig} from "antd";

const theme: ThemeConfig = {
    "token": {
        "colorPrimary": "#3896bd",
        "colorInfo": "#3896bd",
        "borderRadius": 9,
        "fontFamily": "'__Archivo_565873', '__Archivo_Fallback_565873', 'Montserrat', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'",
    },
    "components": {
        "Button": {
            "fontWeight": 500
        },
        "Typography": {
            "fontFamilyCode": "'__Archivo_565873', '__Archivo_Fallback_565873', 'Montserrat', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'",
            "colorPrimaryBorder": "rgb(56,150,189)",
            "colorText": "rgba(0,0,0,0.85)",
            "colorTextDescription": "rgb(89,89,89)",
            "colorTextHeading": "rgba(0,0,0,0.85)",
            "titleMarginBottom": "0",
            "titleMarginTop": "0"
        },
        "Breadcrumb": {
            "lastItemColor": "rgba(0,0,0,0.85)",
            "colorBgTextHover": "rgba(56,149,189,0.06)",
            "borderRadiusSM": 4
        },
        "Dropdown": {
            "controlItemBgHover": "rgba(56,149,189,0.1)"
        },
        "Pagination": {
            "borderRadius": 4,
            "borderRadiusLG": 9
        },
        "Checkbox": {
            "borderRadiusSM": 2
        },
        "Input": {
            "inputFontSize": 16,
            "borderRadiusLG": 9,
            "colorIcon": "rgba(0,0,0,0.85)"
        },
        "Progress": {
            "defaultColor": "rgb(56,150,189)"
        },
        "Popconfirm": {
            "fontSize": 16,
            "colorTextHeading": "rgba(0,0,0,0.85)",
            "colorText": "rgba(0,0,0,0.85)"
        },
        "Notification": {
            "borderRadiusLG": 9
        },
        "Collapse": {
            "headerBg": "rgba(56,149,189,0.06)",
            "colorText": "rgba(0,0,0,0.85)"
        }
    }
}

export default theme;
