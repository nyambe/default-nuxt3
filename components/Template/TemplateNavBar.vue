<template>
    <NavBar color="transparent" class="w-full max-w-7xl mx-auto">
    <template #center>
        <div class="flex justify-start space-x-2 flex-0 w-96" >
            <TemplateDropDown />
            <TemplateDropDown />
        </div>
    </template>

    <template #end>
        <div>
            <ExampleDropDown />
        </div>
    </template>
        
    </NavBar>
</template>