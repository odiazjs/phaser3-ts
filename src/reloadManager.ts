declare var module: any;

export function reload() {
    if (module.hot) {
        module.hot.accept(() => {
            // or use this instead of dispose()
            window.location.reload();
        });
    
        module.hot.dispose(() => {
            //window.location.reload();
        });
    }
}