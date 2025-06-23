/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.ui.actionBar.removeButton('roomListIcon');
    WA.ui.actionBar.removeButton('invite-btn');

    WA.player.setOutlineColor(158, 164, 171);
    if (WA.player.tags.includes("admin")) {
        WA.player.setOutlineColor(87, 137, 164);
    }
    if (WA.player.tags.includes("intervenant")) {
        WA.player.setOutlineColor(255, 208, 0);
    }

    WA.ui.actionBar.addButton({
        id: 'guide-btn',
        // @ts-ignore
        label: 'Guide d\'utilisation',
        callback: () => {
            WA.ui.modal.closeModal();
                setTimeout(() => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: 'https://workadventu.re/wp-content/uploads/2025/06/Features-1.pdf',
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'center',
                });
            }, 200);
            //WA.nav.openCoWebSite(WA.state.loadVariable('url_Bouton') as string);
        }
    });
    WA.ui.actionBar.addButton({
        id: 'plan-btn',
        // @ts-ignore
        label: 'Plan du monde',
        callback: () => {
            WA.ui.modal.closeModal();
                setTimeout(() => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: 'https://workadventure.github.io/overview-liebherr/dist/',
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'center',
                });
            }, 200);
            //WA.nav.openCoWebSite(WA.state.loadVariable('url_Bouton') as string);
        }
    });
    

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
