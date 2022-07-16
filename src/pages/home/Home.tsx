import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChartFix from "../../components/ChartFix";
import Main from "../../components/Main";
import { Formik, Form, FieldArray, Field } from "formik"; 
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { BiTrashAlt } from 'react-icons/bi'

const schema = Yup.object().shape({
    nome: Yup.string()
})

export default function Home(){

    return(
        <>
            <Header />
            <Main>
                <h2 className="font-bold text-2xl mb-5">Dados</h2>
                <div>
                    <Formik
                        initialValues={{
                            selic: "",
                            cdi: "",
                            periodo: "",
                            investimentos: [{nome: "", valor: "", tipo: "", indexador: ""}]
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
                                <div className="w-full">
                                    <FieldArray
                                        name="investimentos"
                                    >
                                        {({insert, remove, push}) => (
                                            <div>
                                                {values.investimentos.map((invest: object, index: number) => (
                                                    <div key={index}>
                                                        <div className="bg-teal-200 flex items-center py-4 px-3 rounded-lg my-3 shadow space-x-3">
                                                            <InputField 
                                                                label="Nome"
                                                                name={`investimentos.${index}.nome`}
                                                                type="text"
                                                                className="py-1 px-2 rounded"
                                                                placeholder="Nome do investimentos"
                                                            />
                                                            <InputField 
                                                                label="Valor"
                                                                name={`investimentos.${index}.valor`}
                                                                type="number"
                                                                className="py-1 px-2 rounded w-40"
                                                                placeholder="Valor do investimento"
                                                            />
                                                            <Field
                                                                component="select"
                                                                name={`investimentos.${index}.tipo`}
                                                                className="py-1 px-2 rounded bg-white"
                                                            >
                                                                <option selected>Título de investimento</option>
                                                                <option value="LCI">LCI / LCA</option>
                                                                <option value="CDB">CDB</option>
                                                                <option value="DEB">Debênture</option>
                                                                <option value="POP">Poupança</option>
                                                            </Field>
                                                            <Field
                                                                component="select"
                                                                name={`investimentos.${index}.indexador`}
                                                                className="py-1 px-2 rounded bg-white"
                                                            >
                                                                <option selected>Indexador</option>
                                                                <option value="SEL">Taxa selic</option>
                                                                <option value="CDI">CDI</option>
                                                            </Field>
                                                            {values.investimentos[index].indexador == "CDI" ? (
                                                                <InputField 
                                                                    label="% CDI"
                                                                    name={`investimentos.${index}.rent`}
                                                                    type="number"
                                                                    className="py-1 px-2 rounded w-20"
                                                                    placeholder="% CDI"
                                                                />
                                                            ) : ""}
                                                            <button 
                                                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 font-bold"
                                                                onClick={() => remove(index)}
                                                            >
                                                                <BiTrashAlt size={20}/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="space-x-4">
                                                <button 
                                                    className="bg-teal-500 rounded py-2 px-4 shadow mt-5 text-white hover:shadow-2xl"
                                                    onClick={() => push({nome: "", valor: "", tipo: "", indexador: ""})}   
                                                >
                                                    Adicionar investimento
                                                </button>
                                                <button 
                                                    className="bg-blue-500 rounded py-2 px-4 shadow mt-5 text-white hover:shadow-2xl"
                                                >
                                                    Simular investimentos
                                                </button>
                                                </div>
                                                
                                            </div>
                                        )}
                                    </FieldArray>
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