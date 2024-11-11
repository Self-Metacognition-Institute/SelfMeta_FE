import {ThemeConfig} from "antd";

const theme: ThemeConfig = {
    "token": {
        "colorPrimary": "#3896bd",
        "colorInfo": "#3896bd",
        "borderRadius": 9
    },
    "components": {
        "Button": {
            "fontWeight": 500
        },
        "Typography": {
            "fontFamilyCode": "'Archivo', Montserrat, 'Liberation Mono', Menlo, Courier, monospace",
            "titleMarginTop": "0.5em",
            "colorPrimaryBorder": "rgb(56,150,189)",
            "colorText": "rgba(0,0,0,0.85)",
            "colorTextDescription": "rgb(89,89,89)",
            "colorTextHeading": "rgba(0,0,0,0.85)"
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