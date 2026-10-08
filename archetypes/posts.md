{{- $postName := .File.ContentBaseName -}}
{{- if eq $postName "index" -}}
  {{- $postName = path.Base .File.Dir -}}
{{- end -}}
---
title: "{{ replace $postName `-` ` ` | title }}"
date: {{ .Date }}
draft: true
slug: "{{ $postName }}"
description: ""
tags: []
categories: []
---

在这里写文章摘要。

<!--more-->

## 背景

## 实践

## 总结
