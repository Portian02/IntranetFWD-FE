
import React, { useState } from 'react';
import './update.css';
const UpdateCommunicationForm = ({ internalCommunication }) => {
    const [title, setTitle] = useState(internalCommunication.title);
    const [content, setContent] = useState(internalCommunication.content);

    const updateCommunication = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/internal_communications/${internalCommunication.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ internal_communication:{title, content,},    }),
            });

            if (response.ok) {
                // Actualizar lógica después de la actualización exitosa
                console.log('Comunicado actualizado con éxito');

            } else {
                // Manejar errores de respuesta
                console.error('Error al actualizar el comunicado');

            }
        } catch (error) {
            // Manejar errores de red
            console.error('Error de red al actualizar el comunicado');

        }
    };

    return (
        <div className="update-communication-form">
            <input type="text" className="update-communication-form__title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input lassName="update-communication-form__content" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button className="update-communication-form__button" onClick={updateCommunication}>Actualizar</button>
        </div>
    );
};

export default UpdateCommunicationForm
