export const donut_options = {
    title: 'Donut',
    resizable: true,
    donut: {
        center: {
            label: 'Browsers'
        }
    },
    height: '400px',
    toolbar: { "enabled": false },
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
            scaleType: 'curve'
        }
    },
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