'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import { SettingsModal } from '@/components/modals/settings-modal';
import { CoverImageModal } from '@/components/modals/cover-image-modal';


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    CoverImageModal
    useEffect(() => {
        setIsMounted(true);

    }, []);
    if (!isMounted) {
        return null;
    }


    return (
        <>
            <SettingsModal />
            <CoverImageModal />
        </>
    )
}

export default ModalProvider