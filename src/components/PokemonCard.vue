<template>
    <div>
        <router-link :to="{ name: 'pokemon', params: { id: number }}">
        <div>
            <div style="opacity: 1; transform: translate3d(0px, 0px, 0px)">
                <div>
                    <div
                    class="
                        w-full
                        rounded-lg
                        overflow-hidden
                        shadow-lg
                        mx-auto
                        cursor-pointer
                        hover:shadow-2xl
                        transition-all
                        duration-200
                        ease-in-out
                        transform
                        hover:-translate-y-2
                    "
                    style="background-color: rgb(248, 88, 136)"
                    >
                        <div
                            class="
                            py-28
                            mx-auto
                            w-full
                            flex
                            items-center
                            justify-center
                            relative
                            "
                            :style="{backgroundColor: medium}"
                        >
                            <p
                            class="
                                text-7xl
                                font-semibold
                                text-black text-opacity-25
                                absolute
                                tracking-xl
                                pointer-events-none
                                top-2
                            "
                            >
                            #{{number}}
                            </p>
                            <div
                            class="inset-x-auto bottom-0 absolute z-20"
                            style="width: 175px; height: 175px"
                            >
                                <div
                                    class="rounded-full absolute z-0 inset-x-auto mx-auto"
                                    style="
                                    width: 130px;
                                    height: 130px;
                                    z-index: -10;
                                    bottom: 8px;
                                    left: 16px;
                                    "
                                    :style="{backgroundColor: light}"
                                ></div>
                                <img
                                    :src="img"
                                    alt="mew"
                                    style="
                                    filter: blur(0px);
                                    transition: filter 500ms ease 0s;
                                    "
                                />
                            </div>
                        </div>
                        <div class="bg-white w-auto pt-5 pb-5 text-center">
                            
                            <h1 class="capitalize font-semibold text-3xl mb-2 text-black">
                                {{name}}
                            </h1>

                            <div class="flex justify-center">
                                <span class="flex font-bold uppercase text-sm mr-3 text-center pl-3" 
                                    v-for="type in types" :key="type" :style="{color: type.value.light}">{{type.key}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </router-link>
    </div> 
</template>

<script setup="props">
    import { computed, defineProps } from "vue";

    const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
    medium : {
        type: String,
        required: true,
    },
    light : {
        type: String,
        required: true,
    },
    types : {
        type: Array,
        required: true,
    }
    });


</script>

<style>

</style>
