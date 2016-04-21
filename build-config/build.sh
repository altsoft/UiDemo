#!/bin/sh
r.js -o build.js
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/StandardWidgets -processed-folder ~/workspace/UiDemo/app/StandardWidgets -minified-models ~/workspace/uiCompressed/app/StandardWidgets/Modules.model -minified-layouts ~/workspace/uiCompressed/app/StandardWidgets/Modules.layout
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/ModelWidgets -processed-folder ~/workspace/UiDemo/app/ModelWidgets -minified-models ~/workspace/uiCompressed/app/ModelWidgets/Modules.model -minified-layouts ~/workspace/uiCompressed/app/ModelWidgets/Modules.layout
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/ModelGrid -processed-folder ~/workspace/UiDemo/app/ModelGrid -minified-models ~/workspace/uiCompressed/app/ModelGrid/Modules.model -minified-layouts ~/workspace/uiCompressed/app/ModelGrid/Modules.layout
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/MenuWidgets -processed-folder ~/workspace/UiDemo/app/MenuWidgets -minified-models ~/workspace/uiCompressed/app/MenuWidgets/Modules.model -minified-layouts ~/workspace/uiCompressed/app/MenuWidgets/Modules.layout
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/ContainerPanels -processed-folder ~/workspace/UiDemo/app/ContainerPanels -minified-models ~/workspace/uiCompressed/app/ContainerPanels/Modules.model -minified-layouts ~/workspace/uiCompressed/app/ContainerPanels/Modules.layout
java -jar ~/Platypus/bin/Tools.jar -minify -app-folder ~/workspace/UiDemo/app/Utils -processed-folder ~/workspace/UiDemo/app/Utils -minified-models ~/workspace/uiCompressed/app/Utils/Modules.model -minified-layouts ~/workspace/uiCompressed/app/Utils/Modules.layout

java -jar ~/Platypus/bin/Tools.jar -force -minify -app-folder ~/workspace/UiDemo/app/ -processed-file ~/workspace/UiDemo/app/MainView.layout -minified-layouts ~/workspace/uiCompressed/app/MainView.layout
java -jar ~/Platypus/bin/Tools.jar -force -minify -app-folder ~/workspace/UiDemo/app/ -processed-file ~/workspace/UiDemo/app/MainView.model -minified-models ~/workspace/uiCompressed/app/MainView.model 
rm -r ~/workspace/uiCompressed/app/Demos.*
find ~/workspace/uiCompressed/app/StandardWidgets -type f -not -name 'Modules.*' -delete
find ~/workspace/uiCompressed/app/ModelWidgets -type f -not -name 'Modules.*' -delete
find ~/workspace/uiCompressed/app/ModelGrid -type f -not -name 'Modules.*' -delete
find ~/workspace/uiCompressed/app/MenuWidgets -type f -not -name 'Modules.*' -delete
find ~/workspace/uiCompressed/app/ContainerPanels -type f -not -name 'Modules.*' -delete
find ~/workspace/uiCompressed/app/Utils -type f -not -name 'Modules.*' -delete
java -jar ~/Platypus/bin/Tools.jar -index -app-folder ~/workspace/uiCompressed/app/ -processed-folder ~/workspace/uiCompressed/app/ -indexed-modules ~/workspace/uiCompressed/app/Modules.js

