var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    build() {

        let defaultValues = this.config.get('defaults');

        return this.prompt([{
            type    : 'input',
            name    : 'prefix',
            message : 'Your module prefix',
            default : defaultValues.prefix
        },{
            type    : 'input',
            name    : 'file_system_name',
            message : 'Your module folder name (without prefix).',
        },{
            type    : 'input',
            name    : 'namespace',
            message : 'Your php namespace for the module',
            default : defaultValues.namespace
        },{
            type    : 'input',
            name    : 'class_name',
            message : 'Your php class name for the module',
        },{
            type    : 'input',
            name    : 'nice_name',
            message : 'Your user friendly readable name',
        },{
            type    : 'input',
            name    : 'description',
            message : 'Description for the UI',
        },{
            type    : 'input',
            name    : 'group',
            message : 'Group name',
            default : defaultValues.group
        },{
            type    : 'input',
            name    : 'category',
            message : 'Category',
            default : defaultValues.category
        },{
            type    : 'input',
            name    : 'icon',
            message : 'Icon filename',
            default : defaultValues.icon
        }]).then((answers) => {

            let dir = answers.prefix + '-' + answers.file_system_name;

            this.fs.copyTpl(
                this.templatePath('module.php'),
                this.destinationPath( dir + '/ ' + dir + '.php'),
                {
                    namespace: answers.namespace,
                    class_name: answers.class_name,
                    file_system_name: answers.file_system_name,
                    dir: dir,
                    nice_name: answers.nice_name,
                    description: answers.description,
                    group: answers.group,
                    category: answers.category,
                    icon: answers.icon,
                }
            );

            this.fs.copyTpl(
                this.templatePath('frontend.php'),
                this.destinationPath( dir + '/includes/frontend.php'),
                {
                    namespace: answers.namespace,
                    class_name: answers.class_name,
                    file_system_name: answers.file_system_name,
                    dir: dir,
                    nice_name: answers.nice_name,
                    description: answers.description,
                    group: answers.group,
                    category: answers.category,
                    icon: answers.icon,
                }
            );

            this.log('Completed Beaver Builder Module:', answers.nice_name);
        });
    }
};