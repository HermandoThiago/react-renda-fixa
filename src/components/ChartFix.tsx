import { Chart } from "react-google-charts";

export default function ChartFix(){

    const options = {
        chart: {
            title: "Investimentos em renda fixa",
            subtitle: "comparação de investimentos"
        }
    }

    const data = [
        ["Investimentos", "Rentabilidade"],
        ["Nubank 100% CDI", 2000],
        ["Inter LCI 88% CDI", 3000],
        ["Poupança BB", 2500]
    ]

    return(
        <Chart
            chartType="Bar"
            width="600px"
            height="400px"
            data={data}
            options={options}
        />
    )
}