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
    title: 'Line + Line (dual axes)',
    axes: {
        left: {
            title: 'Temperature (°C)',
            mapsTo: 'temp'
        },
        bottom: {
            scaleType: 'time',
            mapsTo: 'date',
            title: 'Date'
        },
        right: {
            title: 'Rainfall (mm)',
            mapsTo: 'rainfall',
            correspondingDatasets: [
                'Rainfall'
            ]
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