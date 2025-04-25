import React, {useEffect} from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

type CorelaiRingProps = {
    className: string;
}

const CorelaiRing: React.FC<CorelaiRingProps> = ({className}: CorelaiRingProps) => {
    useEffect(() => {

        const root = am5.Root.new("corelaiRing");


        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        const chart = root.container.children.push(am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "none",
            wheelY: "none",
            startAngle: 48,
            endAngle: 342,
            innerRadius: am5.percent(75)
        }));


        chart.set("cursor", am5radar.RadarCursor.new(root, {
            behavior: "none" // <--- IMPORTANTE
        }));
        chart.zoomOutButton.set("forceHidden", true);
        const xRenderer = am5radar.AxisRendererCircular.new(root, {
            minGridDistance: 1
        });

        xRenderer.grid.template.setAll({

            forceHidden: true,
            visible: false
        });

        xRenderer.labels.template.set("text", "");

        const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0,
            categoryField: "category",
            renderer: xRenderer
        }));

        xAxis.setAll({
            startLocation: 0,
            endLocation: 1,
            zoomX: false, // sicurezza extra
            tooltip: undefined
        });

// Forza disattivazione dello zoom/scroll interno
        xAxis.get("renderer").set("minGridDistance", 50); // aumenta spazio tra categorie
        xAxis.set("forceHidden", false);

        const yRenderer = am5radar.AxisRendererRadial.new(root, {});
        yRenderer.labels.template.set("centerX", am5.p50);
        yRenderer.labels.template.set("forceHidden", true);
        const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            min: 0,
            renderer: yRenderer,
            max: 30
        }));

        xAxis.set("tooltip", am5.Tooltip.new(root, {
            forceHidden: true
        }));

        yAxis.set("tooltip", am5.Tooltip.new(root, {
            forceHidden: true
        }));


        const series = chart.series.push(am5radar.RadarColumnSeries.new(root, {
            name: "Series 1",
            sequencedInterpolation: true,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "category"

        }));

        series.columns.template.setAll({
            cornerRadius: 0,
            tooltipText: undefined
        });

        series.columns.template.adapters.add("fill", function () {
            return am5.color(0xD6C38D);
        });

        series.columns.template.adapters.add("stroke", function () {
            return am5.color(0xD6C38D);
        });


// Set data
        const data = [];
        const maxValue = 30;
        const getValue = function (value:number) {
            if (value > maxValue / 2) {
                return maxValue - value;
            }
            return value;

        }

        for (let i = 0; i < maxValue; i++) {
            data.push({category: i, value: getValue(i)});
        }

        xAxis.data.setAll(data);
        series.data.setAll(data);

        // chart.animate({
        //   key: "startAngle",
        //   to: 185,
        //   duration: 200,
        //   easing: null
        // });
        //
        // chart.animate({
        //   key: "endAngle",
        //   to: 545,
        //   duration: 4000,
        //   easing: am5.ease.out(am5.ease.cubic)
        // });
        //
        chart.appear(400, 100);
        series.appear(2000, 100);

        // Cleanup on unmount
        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div className={`
                        overflow-hidden
                        ${className}
                        `}>
            <div id="corelaiRing" className={`
                                bg-red-500/0
                                absolute
                                -inset-5
                                `}>

            </div>
        </div>
    );
};

export default CorelaiRing;
