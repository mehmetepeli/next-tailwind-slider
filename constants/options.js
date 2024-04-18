export const donut_options = {
    title: 'Donut',
    resizable: true,
    legend: {
        alignment: 'center',
        enabled: false
    },
    donut: {
        center: {
            label: 'Browsers'
        },
        alignment: 'center'
    },
    height: '300px',
    toolbar: { "enabled": false }
}

export const donut_options2 = {
    title: 'Donut',
    resizable: true,
    legend: {
        alignment: 'center',
    },
    donut: {
        center: {
            label: 'Browsers'
        },
        alignment: 'center'
    },
    height: '400px',
    toolbar: { "enabled": false }
}

// "toolbar": { "enabled": true, "controls": [ { "type": "Reset zoom" }, { "type": "Zoom in" }, { "type": "Zoom out" }, ], "numberOfIcons": 4 },

export const line_options = {
    title: 'Line (discrete)',
    axes: {
        bottom: {
            title: '2019 Annual Sales Figures',
            mapsTo: 'key',
            scaleType: 'labels'
        },
        left: {
            mapsTo: 'value',
            title: 'Conversion rate',
            scaleType: 'linear'
        }
    },
    curve: 'curveMonotoneX',
    height: '400px',
    toolbar: { "enabled": false },
}

export const gauge_options = {
    title: 'Gauge semicircular -- danger status',
    resizable: true,
    height: '250px',
    width: '100%',
    gauge: {
        type: 'semi',
        status: 'danger'
    },
    toolbar: { "enabled": false },
}