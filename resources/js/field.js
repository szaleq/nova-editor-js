import IndexField from './components/IndexField';
import DetailField from './components/DetailField';
import FormField from './components/FormField';

Nova.booting((app) => {
    app.component('index-nova-editor-js', IndexField);
    app.component('detail-nova-editor-js', DetailField);
    app.component('form-nova-editor-js', FormField);
});
