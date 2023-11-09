import React from 'react';
import View from '../containers/View/View';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function Subjects() {
    return (
        <View
            title="Materias"
            icon={faBook}
            description='Crea y modifica las materias de los cursos de tu escuela.'
        >

        </View>
    );
}

export default Subjects;