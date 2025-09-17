import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: { layout: 'fullscreen' }, // importante para overlay
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Loading: Story = {
    args: { visible: true, variant: 'loading', message: 'Guardando cambios…' },
};

export const AlertSuccess: Story = {
    render: () => {
        const [open, setOpen] = useState(true);
        return (
            <Modal
                visible={open}
                variant="alert"
                severity="success"
                title="¡Listo!"
                message="Los datos fueron guardados correctamente."
                onClose={() => setOpen(false)}
            />
        );
    },
};

export const AlertError: Story = {
    render: () => {
        const [open, setOpen] = useState(true);
        return (
            <Modal
                visible={open}
                variant="alert"
                severity="error"
                title="Ups…"
                message="Ocurrió un error al procesar tu solicitud."
                buttonText="Cerrar"
                onClose={() => setOpen(false)}
            />
        );
    },
};

export const AlertWarning: Story = {
    render: () => {
        const [open, setOpen] = useState(true);
        return (
            <Modal
                visible={open}
                variant="alert"
                severity="warning"
                title="¿Estás segura?"
                message="Esta acción no se puede deshacer."
                onClose={() => setOpen(false)}
            />
        );
    },
};

export const AlertInfo: Story = {
    render: () => {
        const [open, setOpen] = useState(true);
        return (
            <Modal
                visible={open}
                variant="alert"
                severity="info"
                title="Información"
                message="Revisa tu correo para confirmar la operación."
                onClose={() => setOpen(false)}
            />
        );
    },
};

// TIP rápido para depurar si algo sigue sin verse:
// export const AlertInfoNoPortal: Story = {
//   render: () => <Modal visible variant="alert" severity="info" title="Info" message="Sin portal" disablePortal />,
// };
