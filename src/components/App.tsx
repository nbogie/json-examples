import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { Example, index, Source } from "../sourcesIndex";
import { ExampleView } from "./ExampleView";
import { SourceAndExampleSelector } from './SourceAndExampleSelector';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [source, setSource] = useState<Source>(index[0])
  const [example, setExample] = useState<Example>(() => source.examples[0])

  return (
    <div className="App">
      <SourceAndExampleSelector
        allSources={index}
        source={source}
        setExample={setExample}
        setSource={source => { setSource(source), setExample(source.examples[0]) }} />

      <ExampleView {...{ example, source }} />
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default App

