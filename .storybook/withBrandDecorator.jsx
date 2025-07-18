import { useEffect } from 'react';

export const withBrandDecorator = (StoryFn, context) => {
    useEffect(() => {
        const brand = context.parameters.brand ?? context.globals.brand
        //document.documentElement refers to html tag inside iframe#storybook-preview-iframe
        document.documentElement.setAttribute('data-brand', brand);
    }, [context.parameters.brand, context.globals.brand]);


    return <StoryFn {...context} />;
}
