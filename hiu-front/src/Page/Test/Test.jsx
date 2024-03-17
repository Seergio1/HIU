import React from 'react';
import OBJViewer from './OBJViewer';

function Test() {
    return (
        <div>
            <h1>Visualisation d'un fichier OBJ</h1>
            <OBJViewer objFilePath="/chemin/vers/votre/fichier.obj" />
        </div>
    );
}

export default Test;
