---
title: Modular Novabeast - VRCFury
desc: Modular version of Kittomatic's Novabeast using VRCFury components for easy optimization
dl: modular-novabeast-v1.0.0.unitypackage
thumbnails:
  - src: ./thumbnail.png
    alt: Easy Optimization
---

# Modular Novabeast - VRCFury

Modular version of [Kittomatic's Novabeast](https://jinxxy.com/kittomatic/novabeast) using [VRCFury](https://vrcfury.com/) components for easy optimization

## Features

- Don't want the goggles, collar, or hair? Delete the corresponding mesh and the physbones will be removed with it
- Have too many options cluttering your action menu? Get rid of menu items by deleting the relevant object from the hierarchy
- Femme and masc body meshes have been separated, saving ~1k tris

## Warnings

- This model/prefab comes with **no warranty or guarantees** that it will work! This is what I use for my personal avatar and figured I'd release it for free in case anyone finds it useful.
- Please use this on a new avatar project! **It may break any pre-existing projects.**

## Caveats

- You must already own Kittomatic's Novabeast! This download does not contain any mesh or texture data and relies on the original unitypackage to work properly.
- To properly optimize your avatar, use [d4rkAvatarOptimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer) to recombine the meshes on upload. If you skip this, the final performance ranking will be worse!
- Clothing assets may need extra work to install (e.g. adjusting blendshapes manually)
- The femme body type comes in two different prefabs, with and without chest floof, due to interactions with the collar

## How To Use

1. Add [VRCFury](https://vrcfury.com/) and [d4rkAvatarOptimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer) to your project using the [VRChat Creator Companion](https://vcc.docs.vrchat.com/)
1. Import "Novabeast_V1_0.unitypackage" from Kittomatic into your project
1. Import "modular-novabeast-v1.0.0.unitypackage" from Maserooni into your project
1. Run the patching utility under "Tools > Mass > Novabeast Patcher" to generate the edited FBX
1. Add one of the prefab options under "Mass/Modular Novabeast/Prefabs" to your scene
