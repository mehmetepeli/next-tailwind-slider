// Define the types for the options
interface Toolbar {
    enabled: boolean;
    controls?: { type: string }[];
    numberOfIcons?: number;
}

interface Legend {
    alignment: 'left' | 'center' | 'right';
    enabled?: boolean;
}

interface Donut {
    center: {
        label: string;
    };
    alignment: 'left' | 'center' | 'right';
}

interface Axes {
    bottom: {
        title: string;
        mapsTo: string;
        ScaleTypes: 'linear' | 'log';  // Only 'linear' or 'log' are allowed
    };
    left: {
        mapsTo: string;
        title: string;
        ScaleTypes: 'linear' | 'log';  // Only 'linear' or 'log' are allowed
    };
}

interface Gauge {
    type: 'semi' | 'full';
    status: 'danger' | 'warning' | 'success';
}

interface ChartOptions {
    title: string;
    resizable?: boolean;
    height: string;
    toolbar: Toolbar;
    legend?: Legend;
    donut?: Donut;
    axes?: Axes;
    curve?: string;
    gauge?: Gauge;
    width?: string;
}

// Now define the specific options with the types

export const donut_options: ChartOptions = {
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
    toolbar: { enabled: false }
}

export const donut_options2: ChartOptions = {
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
    toolbar: { enabled: false }
}

export const line_options: ChartOptions = {
    title: 'Line (discrete)',
    axes: {
        bottom: {
            title: '2019 Annual Sales Figures',
            mapsTo: 'key',
            ScaleTypes: 'linear'  // Ensure this matches the expected scale types for your chart library
        },
        left: {
            mapsTo: 'value',
            title: 'Conversion rate',
            ScaleTypes: 'linear'  // Ensure this matches the expected scale types for your chart library
        }
    },
    curve: 'curveMonotoneX',
    height: '400px',
    toolbar: { enabled: false },
}

export const gauge_options: ChartOptions = {
    title: 'Gauge semicircular -- danger status',
    resizable: true,
    height: '250px',
    width: '100%',
    gauge: {
        type: 'semi',
        status: 'danger'
    },
    toolbar: { enabled: false },
}