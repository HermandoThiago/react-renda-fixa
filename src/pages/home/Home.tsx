import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChartFix from "../../components/ChartFix";
import Main from "../../components/Main";
import { Formik, Form, FieldArray } from "formik"; 
import * as Yup from "yup";
import InputField from "../../components/InputField";

const schema = Yup.object().shape({
    nome: Yup.string()
})

export default function Home(){
    return(
        <>
            <Header />
            <div className="p-5 px-10">
                <ChartFix />
            </div>
            <Main>
                <h2 className="font-bold text-2xl mb-5">Dados</h2>
                <div>
                    <Formik
                        initialValues={{
                            selic: "",
                            cdi: "",
                            periodo: ""
                        }}
                        validationSchema={schema}
                        onSubmit={() => console.log("Miauuuu")}
                    >
                        {({values}) => (
                            <Form>
                                <div className="w-full flex flex-row flex-wrap items-center">
                                    <div className="w-1/3">
                                        <InputField 
                                            label="Selic %"
                                            name="selic"
                                            id="selic"
                                            type="number"
                                            placeholder="Taxa selic"
                                            className="rounded-lg pl-3 py-2 ml-2"
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <InputField 
                                            label="CDI %"
                                            name="cdi"
                                            id="cdi"
                                            type="number"
                                            placeholder="Taxa CDI"
                                            className="rounded-lg pl-3 py-2 ml-2"
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <InputField 
                                            label="Período (Anos)"
                                            name="periodo"
                                            id="periodo"
                                            type="number"
                                            placeholder="Periodo (ANOS)"
                                            className="rounded-lg pl-3 py-2 ml-2"
                                        />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Main>
            <Footer />
        </>
    )
}