+++
title = "Code and Software"
+++

Here are some code and software that I have written and/or maintain.

### rebuild-initramfs

A tool for Arch Linux-based systems to quickly rebuild their initramfs using `dracut`. Unlike `mkinitcpio` and `booster`,
`dracut` does not come with a pacman hook, and this fills in the gap.

You can find the development on [GitHub](https://github.com/xuanruiqi/rebuild-initramfs-dracut-arch), or install the packaged
version from the [Arch User Repository](https://aur.archlinux.org/packages/rebuild-initramfs-dracut).

### Coq formalizations

* [Commutative algebra](https://github.com/xuanruiqi/commalg): basic classical commutative algebra formalized within the
[MathComp](https://math-comp.github.io/) framework, which is very work in progress.
* [Category theory](https://github.com/xuanruiqi/categories): yet another category theory formalization, this time using the
MathComp framework. Again, very work in progress.
* [Certified OCaml Interpreter](https://github.com/COCTI/certint-amb): a formalization of OCaml's core type system, with structural
polymorphism and GADTs. This was the basis for my ML Workshop 2021 and CoqPL 2021 papers (see my [papers](/papers_talks) page).
* [Kami](https://github.com/sifive/Kami): a formalization of RISC-V I worked on while interning (and working) at SiFive a few years ago.
* [Compact data structures](https://github.com/affeldt-aist/succinct): a formalization of several compact data structures, which was
the basis of my ITP 2019 paper.

### Old projects

* [Elephant Tracks 2](https://github.com/ElephantTracksProject/et2-java): a framework for fast, extensible JVM GC tracing. Unfortunately,
the work on it has stopped after all students working on the project eventually left the area.
* [JVM heap visualization](https://github.com/HeapVisCapstone): a project I did for my undergraduate degree in computer science.

### Arch Linux private repository

This is mostly just for my personal use, but I maintain an Arch custom repository for software that I like to use. You are also welcome to
use it; to do so, you can add the following lines to your `pacman.conf`:

```
[xuanrui]
Server = https://arch.xuanruiqi.com/repo/
```

You will likely need to add my key (6E06FBC8) to the keyring:
```
# pacman-key --recv-keys 6E06FBC8
# pacman-key --lsign-key 6E06FBC8
```